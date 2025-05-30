import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export function Form() {
  return (
    <>
      <Button type="button" text="Logar" />
      <Input type="text" placeholder={"Digite sua senha"} />
    </>
  );
}
