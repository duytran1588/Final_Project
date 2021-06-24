<div
className="container-fluid"
style={{
  backgroundColor: "#EEEEEE",
  display: "flex",
  justifyContent: "center",
}}
>
<form
  onSubmit={this.handleSubmit}
  style={{ width: "30%" }}
  className="p-5 m-5 bg-white"
>
  <h1 className="text-center mt-0 mb-5">Đăng ký</h1>

  <div className="row">
    <div className="col-6">
      <div className="group">
        <input
          value={this.state.values.firstName}
          onChange={this.handleChangeValue}
          name="firstName"
          type="text"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>firstName</label>
        <span className="text-danger">
          {this.state.errors.firstName}
        </span>
      </div>
    </div>

    <div className="col-6">
      <div class="group">
        <input
          value={this.state.values.lastName}
          onChange={this.handleChangeValue}
          name="lastName"
          type="text"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>lastName</label>
        <span className="text-danger">
          {this.state.errors.lastName}
        </span>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-12">
      <div class="group">
        <input
          value={this.state.values.userName}
          onChange={this.handleChangeValue}
          name="userName"
          type="text"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>userName</label>
        <span className="text-danger">
          {this.state.errors.userName}
        </span>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-12">
      <div class="group">
        <input
          value={this.state.values.email}
          onChange={this.handleChangeValue}
          name="email"
          type="email"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>email</label>
        <span className="text-danger">
          {this.state.errors.email}
        </span>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-6">
      <div class="group">
        <input
          value={this.state.values.password}
          onChange={this.handleChangeValue}
          name="password"
          type="password"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>password</label>
        <span className="text-danger">
          {this.state.errors.password}
        </span>
      </div>
    </div>

    <div className="col-6">
      <div class="group">
        <input
          value={this.state.values.passwordConfirm}
          onChange={this.handleChangeValue}
          name="passwordConfirm"
          type="password"
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label>passwordConfirm</label>
        <span className="text-danger">
          {this.state.errors.passwordConfirm}
        </span>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-12">
      <button
        className="btn text-light bg-dark w-100"
        style={{ fontSize: 25 }}
      >
        Submit
      </button>
    </div>
  </div>
</form>
</div>
