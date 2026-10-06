import { createCliRenderer } from "@opentui/core"
import { createRoot, useRenderer } from "@opentui/react"
import { App } from "./src/views/app"
import { Client } from "./src/tcp/client";
import { UserConfigValidation } from "./src/validations/user-config";
import { useEffect } from "react";
import { CreateUser } from "./src/views/create-user";

export const client: Client = new Client();
client.connect();

function Index() {
  const renderer = useRenderer();
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

const renderer = await createCliRenderer()
createRoot(renderer).render(<Index />)