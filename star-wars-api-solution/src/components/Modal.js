const Modal = ({ children, setModalOpen }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        width: "100%",
        height: "100vh",
        zIndex: "1",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span
            onClick={() => setModalOpen(false)}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Close
          </span>
        </div>
        <div style={{ padding: "10px 0px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
