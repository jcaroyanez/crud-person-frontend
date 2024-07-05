import styles from './TitleBar.module.scss';

interface TitleBarProps {
	title: string;
}

export const TitleBar = ({ title }: TitleBarProps) => {
	return (
		<div className={styles['content']}>
			<p className={styles['title']}>{title}</p>
		</div>
	)
}