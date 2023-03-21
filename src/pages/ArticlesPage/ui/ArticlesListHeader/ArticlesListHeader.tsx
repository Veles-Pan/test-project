import { ArticleSortFields, TypesOfArticlesView } from 'entities/Article';
import {
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSort,
  getArticlesListTypeOfView,
} from 'pages/ArticlesPage';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button,
  ButtonThemes,
  classNames,
  Input,
  Select,
  SelectOption,
  Text,
  useAppDispatch,
} from 'shared';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { articlesPageActions } from '../../model/slice/ArticlesPageSlice';
import styles from './ArticlesListHeader.module.scss';
import { ArticleViewSelector } from './ArticleViewSelector';

interface ArticlesListHeaderProps {
  className?: string;
}

export const ArticlesListHeader = ({ className }: ArticlesListHeaderProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');

  const typeOfView = useSelector(getArticlesListTypeOfView);
  const order = useSelector(getArticlesListOrder);
  const search = useSelector(getArticlesListSearch);
  const sort = useSelector(getArticlesListSort);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortFields>[]>(
    () => [
      { value: ArticleSortFields.TITLE, content: t('sort.title') },
      { value: ArticleSortFields.CREATED_AT, content: t('sort.created-at') },
      { value: ArticleSortFields.VIEWS, content: t('sort.views') },
    ],
    [t],
  );

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const setViewHandler = useCallback(
    (view: TypesOfArticlesView) => {
      dispatch(articlesPageActions.setTypeOfView(view));
    },
    [dispatch],
  );

  const setOrderHandler = useCallback(() => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData, order]);

  const onSearchInputHandler = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  const onChangeSortHandler = useCallback(
    (value: ArticleSortFields) => {
      dispatch(articlesPageActions.setSort(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Input
        placeholder={t('sort.search')}
        value={search}
        onChange={onSearchInputHandler}
      />
      <div className={styles.sortingOptions}>
        <Button
          onClick={() => setOrderHandler()}
          theme={ButtonThemes.CLEAN}
          className={classNames(styles.orderButton, {
            [styles.asc]: order === 'asc',
          })}
        >
          <Text text="↓↓" />
        </Button>
        <Select
          value={sort}
          onChange={onChangeSortHandler}
          label={t('sort.sort-by')}
          options={sortFieldOptions}
        />
        <ArticleViewSelector
          setView={setViewHandler}
          currentTypeOfView={typeOfView!}
        />
      </div>
    </div>
  );
};
