import { Text } from './text';
import { Link } from './link';
import { Title } from './title';
import { Base } from './base';

export type TypographyProps = typeof Base & {
  Text: typeof Text;
  Link: typeof Link;
  Title: typeof Title;
};

const Typography = Base as TypographyProps;
Typography.Text = Text;
Typography.Link = Link;
Typography.Title = Title;

export default Typography;
