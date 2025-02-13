import { avatarSourceDocs } from './avatar.utils';

export default {
  title: 'Atoms/Avatar',
  parameters: {
    layout: 'centered',
  },
};

export const AvatarDefault = {
  render: () => <img className="rl-avatar" src="avatar.png" alt="user avatar" />,
  name: 'default',

  parameters: {
    ...avatarSourceDocs({ size: undefined }),
  },
};

export const AvatarSmall = {
  render: () => <img className="rl-avatar-sm" src="avatar.png" alt="user avatar" />,

  name: 'small',

  parameters: {
    ...avatarSourceDocs({ size: 'sm' }),
  },
};

export const AvatarLarge = {
  render: () => <img className="rl-avatar-lg" src="avatar.png" alt="user avatar" />,

  name: 'large',

  parameters: {
    ...avatarSourceDocs({ size: 'lg' }),
  },
};

export const AvatarXLarge = {
  render: () => <img className="rl-avatar-xl" src="avatar.png" alt="user avatar" />,

  name: 'x large',

  parameters: {
    ...avatarSourceDocs({ size: 'xl' }),
  },
};

export const AvatarXXLarge = {
  render: () => <img className="rl-avatar-xxl" src="avatar.png" alt="user avatar" />,

  name: 'xx large',

  parameters: {
    ...avatarSourceDocs({ size: 'xxl' }),
  },
};
