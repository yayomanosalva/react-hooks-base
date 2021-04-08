import Listadonombres from "./components/Listadonombres";
import Props from './components/Props'
import Cards from './components/Cards'

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

function App() {

  const cards = [
    {
      imagen: "https://picsum.photos/id/237/200/300",
      title: "Titulo de cards 1",
      texto: "Texto de la cards 1"
    },
    {
      imagen: "https://picsum.photos/200/300/?blur",
      title: "Titulo de cards 2",
      texto: "Texto de la cards 2"
    },
    {
      imagen: "https://picsum.photos/200/300/?blur-2",
      title: "Titulo de cards 3",
      texto: "Texto de la cards 3"
    },
    {
      imagen: "https://picsum.photos/seed/picsum/200/300",
      title: "Titulo de cards 4",
      texto: "Texto de la cards 4"
    }
  ]

  const familia = [
    {nombre:"jair", app : "Manosalva"},
    {nombre:"mery", app : "Manosalva"},
    {nombre:"hnan", app : "Manosalva"},
    {nombre:"yes", app : "Ferrer"}
  ]
  return (
    <div className="container">

      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <Link className="nav-item nav-link active" to="/lista">lista <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="/bienvenido">bienvenido</Link>
              <Link className="nav-item nav-link" to="/cards">cards</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/lista">
            <Listadonombres />
          </Route>
          <Route path="/bienvenido">
            {familia.map(fam => <Props nombre={fam.nombre} app={fam.app}/>)}
          </Route>
          <Route exact path="/cards">
            <div className="row">
              {cards.map(item => <div className="col">
                <Cards imagen={item.imagen} title={item.title} texto={item.texto}></Cards>
              </div>)
              }
            </div>
          </Route>
        </Switch>
      </Router>

      {/* <Router>
        <Link to="/inicio">Inicio</Link>
        <Link to="/">Base</Link>
        <Switch>
          <Route exact path="/inicio/:id">
            <inicio/>
          </Route>
          <Route path="/base">
            <base/>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
