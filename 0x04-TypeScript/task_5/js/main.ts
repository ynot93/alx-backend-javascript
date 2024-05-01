interface MajorCredits {
  credits: number;
  _majorBrand: void;
}

interface MinorCredits {
  credits: number;
  _minorBrand: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {credits: subject1.credits + subject2.credits, _majorBrand: undefined};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {credits: subject1.credits + subject2.credits, _minorBrand: undefined};
}

