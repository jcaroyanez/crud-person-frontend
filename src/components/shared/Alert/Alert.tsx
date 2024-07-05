import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogOverlay, Box, Button } from "@chakra-ui/react";
import React from "react";

interface AlertProps {
	type: string;
	isOpen: boolean;
	onClose: () => void;
}
export const Alert = ({ type, isOpen, onClose }: AlertProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const cancelRef = React.useRef<any>();

	return (
		<AlertDialog
			isOpen={isOpen}
			onClose={onClose}
			leastDestructiveRef={cancelRef}
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogBody display='flex' justifyContent='center'>
						<Box 
						display='flex' 
						justifyContent='center' 
						alignItems='center' 
						width='250px' 
						height='250px' 
						border='1px solid #8DBC27' 
						borderRadius='250px'>
							{type === 'success' && (
								<CheckIcon color='#8DBC27' width={200} height={200} />
							)}
						</Box>
					</AlertDialogBody>

					<AlertDialogFooter>
						<Box gap='15px' display='flex' justifyContent='space-between' width='100%'>
							<Button
								rightIcon={<SmallCloseIcon />}
								color='#0F3349'
								colorScheme='teal'
								variant='outline'
								onClick={onClose}>
								Cancelar
							</Button>
							<Button rightIcon={<CheckIcon />} color='#fff' backgroundColor='#0F3349' onClick={onClose}>
								Aceptar
							</Button>
						</Box>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
}