import "../../styles/login.module.css";

const LoginHeader = () => (
  <>
    {/* Sección izquierda con título - Solo visible en desktop */}
    <div className="col-lg-5 d-none d-lg-block position-relative bg-primary">
      <div className="diagonal-bg"></div>
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white z-index-1 px-4">
        <h1 className="display-3 fw-bold mb-4">INAEBA</h1>
        <p className="lead mb-4">Instituto Nacional para la Educación de los Adultos en el Estado de Guanajuato</p>
        <div className="border-top border-white opacity-50 w-50 mx-auto my-4"></div>
        <p className="fs-5">Sistema de Administración Educativa</p>
      </div>
    </div>

    {/* Header móvil - Solo visible en móvil */}
    <div className="col-12 d-lg-none bg-primary text-white text-center py-2 header-mobile">
      <h2 className="fw-bold mb-1" style={{ fontSize: "1.25rem" }}>
        INAEBA
      </h2>
      <p className="mb-0 px-3" style={{ fontSize: "0.8rem" }}>
        Sistema de Administración Educativa
      </p>
    </div>
  </>
)

export default LoginHeader
