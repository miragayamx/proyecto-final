import GlobalProvider from './provider/GlobalProvider';
import './App.css';

const App = () => {
	return (
		<main>
			<GlobalProvider>
				<Menu />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/producto/:id" component={Producto} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/registro" component={Registro} />
					<Route exact path="/actualizar/:id" component={Actualizar} />
					<Route exact path="/shop" component={Shop} />
					<Route component={PageNotFound} />
				</Switch>
			</GlobalProvider>
		</main>
	);
};

export default App;
