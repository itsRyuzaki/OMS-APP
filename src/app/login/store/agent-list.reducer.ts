import {
  ADD_REDIRECT_URL,
  AgentActionType,
  SET_LOGIN_STATUS,
} from './agent-list.actions';

export function agentListReducer(
  state: AgentState = initialAgentState,
  action: AgentActionType
) {
  switch (action.type) {
    case ADD_REDIRECT_URL: {
      return {
        ...state,
        redirectUrl: action.payload,
      };
    }

    case SET_LOGIN_STATUS: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }

    default:
      return state;
  }
}

export interface AppState {
  agentList: AgentState;
}

interface agentCredentials {
  LL_ID: string;
  password: string;
}

export interface AgentState {
  isLoggedIn: boolean;
  validUserNames: agentCredentials[];
  redirectUrl: string;
}

const initialAgentState: AgentState = {
  isLoggedIn: false,
  validUserNames: [
    {
      LL_ID: 'yogaggar',
      password: 'abc',
    },
    {
      LL_ID: 'kanverma',
      password: 'xyz',
    },
  ],
  redirectUrl: '',
};
