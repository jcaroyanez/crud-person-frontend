import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from './routes/route'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<ChakraProvider>
				<RouterProvider router={ROUTER} />
			</ChakraProvider>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
	</React.StrictMode>,
)
