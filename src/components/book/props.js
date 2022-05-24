import PropTypes from 'prop-types';

export default {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	authorName: PropTypes.string.isRequired,
	genreName: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired
}