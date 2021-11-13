export function Layout(props) {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
