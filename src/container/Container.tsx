import classNames from 'classnames';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <div className={classNames('', props.className)}>{children}</div>
    </>
  );
};

export default Container;
