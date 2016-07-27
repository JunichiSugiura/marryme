contract MarriageManager {
  // enum PhaseOptions {Proposed, Married, Divorced}

  struct Participant {
    address owner;
    uint amount;
  }

  struct Prenup {
    mapping(uint => Participant) participants;
    uint participantCount;
    // PhaseOptions phase;
  }

  mapping(uint => Prenup) prenups;
  uint prenupCount;

  function MarriageManager(address _owner, uint _value) {
    Prenup p = prenups[prenupCount++];
    p.participantCount = 2;
    p.participants[0] = Participant({owner: msg.sender, amount: msg.value});
    p.participants[1] = Participant({owner: _owner, amount: _value});

    prenups[prenupCount++] = p;
    // phase = PhaseOptions.Proposed;
  }
}