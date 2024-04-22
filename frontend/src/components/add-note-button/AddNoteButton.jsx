import { Affix, Button } from "#mc";
import { IconPlus } from "#ti";

export default function ({ open, hidden }) {
    return (
        <Affix style={{visibility: hidden ? "hidden" : "visible"}} position={{ bottom: 20, left: 20 }}>
            <Button
                onClick={open}
                style={{ borderRadius: "50%" }}
                h={60}
                w={60}
            >
                <IconPlus />
            </Button>
        </Affix>
    );
}
