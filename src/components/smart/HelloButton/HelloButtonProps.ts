export interface HelloButtonProps {
  myName: string;
}

export interface HelloButtonDispatchProps {
  onHello: (payload: string) => void;
}
