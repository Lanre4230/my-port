import "./Form.scss";

export default function Form() {
  return (
    <>
      {/* <div className="parent-container"> */}
      <div className="cta">
        <div className="cta-text-box">
          <h1>Contact Me</h1>
          <p className="cta-text">
            If you have any oppurtunities, ideas or questions you want to throw
            my way, don't hesitate to message me! lanre4230@gmail.com
          </p>

          <form className="cta-form" name="sign-up">
            <div>
              <label for="full-name">Company or Individual Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="John Doe"
                name="full-name"
                required
              />
            </div>

            <div>
              <label for="email">Company or Individual Email</label>
              <input
                id="email"
                type="email"
                placeholder="me@example.com"
                name="email"
                required
              />
            </div>

            <div>
              <label for="message">Message</label>
              <textarea
                id="text"
                type=""
                placeholder="message"
                name="message"
                required
              />
            </div>
            <button className="cta-button">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
