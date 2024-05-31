type LoginGoogleType = {
  clientId: string;
  credential: string;
  loginCheck: boolean;
};

type getTokenType = {
  config: {};
  data: { id_token: string };
  headers: {};
  request: {};
  status: number;
  statusText: string;
};
