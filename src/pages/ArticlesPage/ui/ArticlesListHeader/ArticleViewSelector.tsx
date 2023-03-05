import { TypesOfArticlesView } from 'entities/Article';
import {
  Button,
  ButtonThemes,
  classNames,
  ListViewIcon,
  TileViewIcon,
} from 'shared';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  setView: (view: TypesOfArticlesView) => void;
  currentTypeOfView: TypesOfArticlesView;
}

export const ArticleViewSelector = ({
  setView,
  currentTypeOfView,
}: ArticleViewSelectorProps) => {
  const isTileView = currentTypeOfView === TypesOfArticlesView.TILE;
  return (
    <>
      <Button
        onClick={() => setView(TypesOfArticlesView.TILE)}
        className={classNames(styles.button, { [styles.active]: isTileView })}
        theme={ButtonThemes.CLEAN}
      >
        <TileViewIcon className={styles.icon} />
      </Button>
      <Button
        onClick={() => setView(TypesOfArticlesView.LIST)}
        className={classNames(styles.button, { [styles.active]: !isTileView })}
        theme={ButtonThemes.CLEAN}
      >
        <ListViewIcon className={styles.icon} />
      </Button>
    </>
  );
};
