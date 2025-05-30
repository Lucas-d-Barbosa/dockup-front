import { Link } from "react-router";
type LinkRouterProps = {
  ref: string;
  text: string;
};
export function LinkRouter({ ref, text }: LinkRouterProps) {
  return <Link to={ref}>{text}</Link>;
}
