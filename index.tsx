import { createCliRenderer } from "@opentui/core"
import { createRoot, useRenderer } from "@opentui/react"
import type { Dispatch, SetStateAction } from "react"
import { App } from "./src/views/app"
import { MenuOption } from "./src/views/menu-option"
import { Client } from "./src/infra/client";
import { UserConfigValidation } from "./src/validations/user-config";
import { useEffect, useState } from "react";
import { CreateUser } from "./src/views/create-user";
import { Style, TTheme } from "./src/views/styles/style";
import { TitleScreen } from "./src/views/title-screen";
import { TRenderScreen } from "./src/types/render-screen";
import { Observer } from "./src/patterns/observer/observer";

export const client: Client = new Client();
export const style: Style = new Style("default");

class PageObserver implements Observer {
  constructor(
    private counter: number,
    private setCounter: Dispatch<SetStateAction<number>>
  ) {}
  update(): void {
    this.setCounter(this.counter + 1);
  }
}

function Index() {
  const isValidUser: boolean = UserConfigValidation.validateIfExists();
  const [renderScreen, setRenderScreen] = useState<TRenderScreen>(isValidUser ? 'title-screen' : 'create-user');
  const [counter, setCounter] = useState<number>(0);

  const pageObserver = new PageObserver(counter, setCounter);
  style.subscribe(pageObserver);
  
  console.log("Debug: Is valid user:", isValidUser);

  // Exibir console: deixar descomentado
  // Não exibir console: deixar comentado
  const renderer = useRenderer();
  useEffect(() => {
    renderer.console.show();
    console.log("Renderer console shown");
  }, [])

  if (renderScreen === 'title-screen') return <TitleScreen setRenderScreen={setRenderScreen} />;
  if (renderScreen === 'create-user') return <CreateUser setRenderScreen={setRenderScreen} />;
  if (renderScreen === 'app') return <App setRenderScreen={setRenderScreen} />;
  if (renderScreen === 'menu-option') return <MenuOption setRenderScreen={setRenderScreen} />;

  return <></>;
}

export const renderer = await createCliRenderer({ backgroundColor: style.get().backgroundColor })
createRoot(renderer).render(<Index />)