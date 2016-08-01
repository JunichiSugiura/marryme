contract ShareAccount {

  // Init public var
  bool public status;

  // Constructor
  function ShareAccount() {
    status = false;
  }

  function getMarried() {
    status = true;
  }

}
