import { DrawingWorkspace } from "@/components/DrawingWorkspace";
import { G00General } from "@/components/sheets/G00General";
import { G01Experience } from "@/components/sheets/G01Experience";
import { G02PlatformDesigner } from "@/components/sheets/G02PlatformDesigner";
import { G03CadAutomation } from "@/components/sheets/G03CadAutomation";
import { G04Software } from "@/components/sheets/G04Software";
import { G05Projects } from "@/components/sheets/G05Projects";
import { G06Skills } from "@/components/sheets/G06Skills";
import { G07Contact } from "@/components/sheets/G07Contact";

/**
 * Sheet content is rendered on the server and handed to the client-side
 * workspace, which only decides which sheet is visible.
 */
export default function Home() {
  return (
    <DrawingWorkspace
      panels={{
        g00: <G00General />,
        g01: <G01Experience />,
        g02: <G02PlatformDesigner />,
        g03: <G03CadAutomation />,
        g04: <G04Software />,
        g05: <G05Projects />,
        g06: <G06Skills />,
        g07: <G07Contact />,
      }}
    />
  );
}
