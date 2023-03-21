import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button, classNames, DynamicReducersLoader, ReducersList, TextArea, useAppDispatch,
} from 'shared';
import { getCommentFormText } from '../model/selectors/getCommentFormText/getCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/AddCommentFormSlice';
import styles from './AddComentForm.module.scss';

interface AddComentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const initialRedusers: ReducersList = {
  commentForm: addCommentFormReducer,
};

export const AddComentForm = ({ className, onSendComment }: AddComentFormProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const formText = useSelector(getCommentFormText);

  const onChangeTextAreaHandler = useCallback((value: string) => {
    dispatch(addCommentFormActions.updateText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(formText || '');
    onChangeTextAreaHandler('');
  }, [formText, onChangeTextAreaHandler, onSendComment]);

  return (
    <DynamicReducersLoader reducers={initialRedusers}>
      <div className={classNames(styles.container, {}, [className])}>
        <div className={styles.inputForm}>
          <TextArea value={formText} onChange={onChangeTextAreaHandler} placeholder={t('comments.input-placeholder')} />
        </div>

        <Button onClick={onSendHandler} className={styles.button}>
          {t('comments.add-comment')}
        </Button>
      </div>
    </DynamicReducersLoader>
  );
};
