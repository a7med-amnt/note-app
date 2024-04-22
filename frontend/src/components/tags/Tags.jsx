import { Badge } from "#mc";
export default function ({ tags }) {
    tags = tags || ["test", "test-1", "test-3", "test-4", "test-5"];
    return tags.map(tag => <Badge key={tag}>{tag}</Badge>);
}
