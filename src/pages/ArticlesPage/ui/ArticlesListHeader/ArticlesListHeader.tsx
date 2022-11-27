import { TypesOfArticlesView } from 'entities/Article';
import {
  Button, ButtonThemes, classNames, ListViewIcon, TileViewIcon,
} from 'shared';
import styles from './ArticlesListHeader.module.scss';

interface ArticlesListHeaderProps {
  className?: string
  currentTypeOfView: TypesOfArticlesView
  setTileView: () => void
  setListView: () => void
}

export const ArticlesListHeader = ({
  className, currentTypeOfView, setTileView, setListView,
}: ArticlesListHeaderProps) => {
  const isTileView = currentTypeOfView === TypesOfArticlesView.TILE;
  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Button
        onClick={setTileView}
        className={classNames(styles.button, { [styles.active]: isTileView })}
        theme={ButtonThemes.CLEAN}
      >
        <TileViewIcon className={styles.icon} />
      </Button>
      <Button
        onClick={setListView}
        className={classNames(styles.button, { [styles.active]: !isTileView })}
        theme={ButtonThemes.CLEAN}
      >
        <ListViewIcon className={styles.icon} />
      </Button>

    </div>
  );
};
