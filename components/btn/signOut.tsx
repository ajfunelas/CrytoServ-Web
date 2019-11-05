import React from "react"
import { HeaderNavigation, ALIGN, StyledNavigationItem, StyledNavigationList } from "baseui/header-navigation"
import { Button, SHAPE, SIZE } from "baseui/button"
import { Link, Route } from "react-router-dom"
import { StoreContainer } from "../../unstated/userStore"

interface Props {}

const SignOut: React.FC<Props> = () => {
	const { handleRestart } = StoreContainer.useContainer()
	return (
		<div>
			<StyledNavigationItem>
				<Route>
					<Link to="/">
						<Button onClick={handleRestart} size={SIZE.compact} shape={SHAPE.pill}>
							Logout
						</Button>
					</Link>
				</Route>
			</StyledNavigationItem>
		</div>
	)
}

export default SignOut
