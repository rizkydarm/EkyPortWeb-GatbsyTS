import * as React from 'react';
import PortfolioCard from "../components/Card";
import Layout from '../components/Layout';
import { Box, CircularProgress, Grid2 } from '@mui/material';
import SEO from '../components/SEO';
import { PortfolioItem, fetchPortfolioData } from '../firebase';


function GridView() {
	const [portfolioData, setPortfolioData] = React.useState<PortfolioItem[]>([]);

	React.useEffect(() => {
		// Fetch portfolio data when the component mounts
		const fetchData = async () => {
			try {
				let data = await fetchPortfolioData();
				data = data.sort((a, b) => (a.orderid ?? '99').localeCompare(b.orderid ?? '99'));
				setPortfolioData(data); // Update state with fetched data
			} catch (error) {
				console.error("Failed to load portfolio data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Box sx={{
			padding: '16px',
			flexGrow: 1,
			height: '100%',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		}}>
			{portfolioData.length === 0 ? (
				<CircularProgress />
			) : (
				<Grid2 container
					sx={{ overflowY: 'auto', width: '100%' }}
					rowSpacing={2}
					columnSpacing={2}>
					{portfolioData.map((item) => (
						<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
							<PortfolioCard portfolioItem={item} />
						</Grid2>
					))}
				</Grid2>
			)}
		</Box>
	);
}

const HomePage = () => {
	return (
		<Layout name="My Portfolio">
			<SEO />
			<GridView />
		</Layout>
	);
};

export default HomePage;