import { BoxRenderable } from "@opentui/core";
import { renderer } from "../renderer";
import { header } from "./header";
import { sidebar } from "./sidebar";
import { painel } from "./painel";
import { message } from "./message";

const app = new BoxRenderable(renderer, {
    id: 'app',
    borderColor: '#ffffffaa',
    width: '100%',
    height: '100%',
    borderStyle: 'rounded',
})

const divisor = new BoxRenderable(renderer, {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%'
});

app.add(header);
divisor.add(sidebar);
divisor.add(painel);
app.add(divisor);
app.add(message);

export { app };