import { Badge } from "#mc";
export default function ({ tags }) {
    tags = tags || [];
    return tags.map((tag,i) => <Badge key={i}>{tag}</Badge>);
}
