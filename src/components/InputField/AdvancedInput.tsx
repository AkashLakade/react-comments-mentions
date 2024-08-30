import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, { MentionData } from '@draft-js-plugins/mention';
import { GlobalContext } from '../../context/Provider';
import { SubMentionComponentProps } from '@draft-js-plugins/mention/lib/Mention';
interface AdvancedInputProps {
  formStyle?: object;
  handleSubmit: (event: React.FormEvent, content: string, editorText: EditorState) => void;
  mode?: string;
  cancelBtnStyle?: object;
  submitBtnStyle?: object;
  comId?: string;
  imgStyle?: object;
  imgDiv?: object;
  customImg?: string;
  text: string;
  editorText?: EditorState;
}

const MentionComponent = (props: SubMentionComponentProps) => {
  const { children, mention } = props;
  const link = mention?.link || "#";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}
    >
      {children}
    </a>
  );
};

const mentionPlugin = createMentionPlugin({
  mentionTrigger: ['@', '#'],
  mentionPrefix: (trigger) => trigger,
  supportWhitespace: true,
  mentionComponent: MentionComponent,
});

const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const AdvancedInput = ({
  formStyle,
  handleSubmit,
  submitBtnStyle,
  cancelBtnStyle,
  mode,
  comId,
  imgDiv,
  imgStyle,
  customImg,
  editorText
}: AdvancedInputProps) => {
  const globalStore: any = useContext(GlobalContext);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<MentionData[]>(globalStore.mentionSuggestions || []);
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorText && editorText instanceof EditorState) {
      setEditorState(editorText)
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [editorText]);

  const onChange = useCallback((newEditorState: EditorState) => {
    setEditorState(newEditorState);
  }, []);

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);

  const onSearchChange = useCallback(
    ({ trigger, value }: { trigger: string; value: string }) => {
      const filteredSuggestions = globalStore.mentionSuggestions[trigger as '@' | '#'].filter((mention: any) =>
        mention.name.toLowerCase().includes(value.toLowerCase())
      );
  
      setSuggestions(filteredSuggestions as MentionData[]);
    },
    [globalStore]
  );

  const handleSubmitWrapper = async (e: React.FormEvent) => {
    e.preventDefault();
    if(editorState){
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
      if (rawContentState) {
        await handleSubmit(e, JSON.stringify(rawContentState), editorState);
        setEditorState(EditorState.createEmpty());
      }
    }
  };

  return (
    <div className='advanced-overlay'>
      <div className='userImg' style={imgDiv}>
        <a target='_blank' href={globalStore.currentUserData.currentUserProfile}>
          <img
            src={globalStore.customImg || customImg || globalStore.currentUserData.currentUserImg}
            style={globalStore.imgStyle || imgStyle}
            alt='userIcon'
            className='imgdefault'
          />
        </a>
      </div>
      <div className='advanced-input'>
        <form
          className='form advanced-form'
          style={globalStore.formStyle || formStyle}
          onSubmit={handleSubmitWrapper}
        >
          <div className="editor" 
            onClick={() => {
              editorRef.current?.focus();
            }}
          >
            <Editor
              editorState={editorState}
              onChange={onChange}
              plugins={plugins}
              ref={editorRef}
              placeholder={globalStore.isAuthenticated ? "Add a comment or use '@' to mention users or '#' for assets" : "Start typing a comment..."}
            />
            <MentionSuggestions
              open={open}
              onOpenChange={onOpenChange}
              onSearchChange={onSearchChange}
              suggestions={suggestions}
            />
          </div>
          <div className='advanced-btns'>
            {mode && (
              <button
                className='advanced-cancel cancelBtn'
                style={globalStore.cancelBtnStyle || cancelBtnStyle}
                type='button'
                onClick={() =>
                  mode === 'editMode'
                    ? globalStore.handleAction(comId, true)
                    : globalStore.handleAction(comId, false)
                }
              >
                Cancel
              </button>
            )}
            <button
              className='advanced-post postBtn'
              type='submit'
              disabled={!editorState || !(editorState instanceof EditorState) || !editorState.getCurrentContent().hasText()}
              style={globalStore.submitBtnStyle || submitBtnStyle}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvancedInput;
