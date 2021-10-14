import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfilePros {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfilePros) {
  return(
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>John Doe</Text>
          <Text color="gray.300" fontSize="small">john.doe@test.com</Text>
        </Box>
      )}
      <Avatar size="md" name="John Doe" src="https://github.com/johndoe.png" />
    </Flex>
  )
}