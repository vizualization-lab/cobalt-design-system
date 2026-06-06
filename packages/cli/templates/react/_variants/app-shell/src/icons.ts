// Register each icon this app renders. Cobalt's icon registry is tree-shakeable —
// only the icons you import are bundled.
//
// Some components (e.g. co-nav-rail-item) swap to the filled variant on the
// `selected` state, so any icon that flows into one of those needs both the
// outline and the `-fill` modules registered.
import '@cobalt/icons/co-logo';
import '@cobalt/icons/home';
import '@cobalt/icons/home-fill';
import '@cobalt/icons/dashboard';
import '@cobalt/icons/dashboard-fill';
import '@cobalt/icons/settings';
import '@cobalt/icons/settings-fill';
import '@cobalt/icons/task-alt';
