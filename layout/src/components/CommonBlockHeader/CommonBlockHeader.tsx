import styles from './CommonBlockHeader.module.scss'

interface CommonBlockHeaderProps {
  title: string;
  isFirst?: boolean
}

export const CommonBlockHeader = ({ title, isFirst }: CommonBlockHeaderProps) => {
  return <div className={`${styles.block_header} ${isFirst ? styles.block_header_trimed: ''}`}>{title}</div>;
};
