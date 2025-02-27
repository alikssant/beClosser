import { withAuthRequired } from "hoc/withAuthRequired";

export function MainBrowse(props) {}

export const ProtectedNoteBrowse = withAuthRequired(MainBrowse);
// do not remove will be mistake in routing
