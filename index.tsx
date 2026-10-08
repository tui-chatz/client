import { createCliRenderer } from "@opentui/core"
import { createRoot, useRenderer } from "@opentui/react"
import { App } from "./src/views/app"
import { Client } from "./src/infra/client";
import { UserConfigValidation } from "./src/validations/user-config";
import { useEffect } from "react";
import { CreateUser } from "./src/views/create-user";
import { Style } from "./src/views/styles/style";

export const client: Client = new Client();
export const style: Style = new Style("default");

function Index() {
  // const renderer = useRenderer();
  // // Exibir console: deixar descomentado
  // // Não exibir console: deixar comentado
  // useEffect(() => {
  //   renderer.console.show();
  //   console.log("Renderer console shown");
  // }, [])

  const isValidUser = UserConfigValidation.validateIfExists();

  if (!isValidUser) return <CreateUser />;

  return <App />;
}

const renderer = await createCliRenderer({ backgroundColor: style.get().backgroundColor })
createRoot(renderer).render(<Index />)