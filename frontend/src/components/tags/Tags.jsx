import { Badge } from "#mc";
export default function ({ tags }) {
    tags = tags || [];
    return tags.map((tag, i) => (
        <Badge style={{ textTransform: "none" }} key={i}>
            {tag}
        </Badge>
    ));
}
