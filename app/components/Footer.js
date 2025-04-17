export default function Footer({ children }) {
    return (
      <div>
        {children}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="text-center">&copy; 2025</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  