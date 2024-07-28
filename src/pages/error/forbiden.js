// Fox requirements
import { FoxComponent, HeaderNavComponent,
    FooterComponent } from '../../components';

// Page class
class ForbidenErrorPage extends FoxComponent {
    
    // Component strings
    static strings = {
        en: {
            title: 'You do not have permissions to access',
            description: 'Unfortunately, you do not have permission to access the page you are looking for. We invite you to return to the main page to continue browsing.',
            back: 'Back to home',
        },
        es: {
            title: 'No tienes los permisos suficientes para acceder',
            description: 'Lamentablemente, no tienes permiso para acceder a la página que buscas. Te invitamos a regresar a la página principal para continuar navegando.',
            back: 'Volver al inicio',
        },
    };

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                
                <HeaderNavComponent
                    selected=""
                    events={this.props.events}
                    params={this.props.params}
                    language={this.props.language}
                    theme={this.props.theme} />

                <div className="flex-fill container mt-5 mb-4">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10 px-4 p-md-2 text-center mb-4">
                            <i className="bi bi-plugin d-block mb-3 py-4 opacity-75" style={{ fontSize: '100px' }}></i>
                            <h2 className="mb-4">
                                {this.state.strings.title}
                            </h2>
                            <p className="lead mb-4 pb-4">
                                {this.state.strings.description}
                            </p>
                            <p>
                                <a className="btn btn-secondary px-4" href="#/">
                                    <i className="bi bi-chevron-left me-3"></i>
                                    {this.state.strings.back}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <FooterComponent
                    events={this.props.events}
                    params={this.props.params}
                    language={this.props.language}
                    theme={this.props.theme} />
            </div>
        );
    }
};

export default ForbidenErrorPage;