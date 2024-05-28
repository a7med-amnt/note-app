import { Skeleton, Group, Stack } from "#mc";
export default function () {
    return (
        <Stack m="md">
            <Skeleton w="100%" h={40} />
            <Skeleton w="100%" h={150} />
            <Stack>
                <Group>
                    <Skeleton w={30} h={15} />
                    <Skeleton w={25} h={15} />
                    <Skeleton w={35} h={15} />
                </Group>
                <Skeleton w="75%" h={40} />
            </Stack>
            <Skeleton w="100%" h={40} />
        </Stack>
    );
}
