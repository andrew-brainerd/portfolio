import styles from 'styles/components/HomeLink.module.scss';

interface HomeLinkProps {
  children?: React.ReactNode;
  text?: string;
  path?: string;
  openNewTab?: boolean;
}

const HomeLink = ({ children, text, path, openNewTab = true }: HomeLinkProps) => {
  return (
    <a className={styles.homeLink} href={path} target={openNewTab ? '_blank' : '_self'}>
      {children || text || path}
    </a>
  );
};

export default HomeLink;
