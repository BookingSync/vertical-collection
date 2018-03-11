import DebugMixin from './edge-visualization/debug-mixin';
import Collection from '../components/vertical-collection/component';

// When in Fastboot mode do not reopen the collection, debug helpers are pointless
if (window.document) {
  Collection.reopen(DebugMixin);
}
