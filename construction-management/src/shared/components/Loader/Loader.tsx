import "./style.scss";

export interface LoaderProps {
  loading: boolean;
}

export const Loader = ({ loading }: LoaderProps) => {
  return (
    <div className="lds-ripple" hidden={!loading}>
      <div></div>
      <div></div>
    </div>
  );
};
