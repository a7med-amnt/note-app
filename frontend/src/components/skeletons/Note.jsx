import { Divider, Stack, Group, Skeleton, Paper } from "#mc";
export default function () {
    return (
        <Paper
            withBorder
            p="md"
            m="md"
            bg="mbg"
            shadow="sm"
            style={{ flexBasis: 300, flexGrow: 1 }}
        >
            <Stack>
                <Group justify="space-between">
                    <Skeleton w={150} h={10} />
                    <Skeleton w={30} h={20} />
                </Group>
                <Divider />
                <Stack>
                    <Skeleton w="20%" h={10} />
                    <Skeleton w="70%" h={10} />
                    <Skeleton w="30%" h={10} />
                    <Skeleton w="50%" h={10} />
                </Stack>
                <Group>
                    <Skeleton w={70} h={10} />
                    <Skeleton w={65} h={10} />
                    <Skeleton w={60} h={10} />
                    <Skeleton w={63} h={10} />
                </Group>
                <Group justify="flex-end">
                    <Skeleton w={60} h={40} />
                    <Skeleton w={60} h={40} />
                </Group>
            </Stack>
        </Paper>
    );
}
