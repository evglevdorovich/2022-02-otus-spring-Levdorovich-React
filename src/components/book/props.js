import PropTypes from 'prop-types';

export default {
	name: PropTypes.string.isRequired,
	authorName: PropTypes.string.isRequired,
	genreName: PropTypes.string.isRequired,
	onRemove: PropTypes.func.isRequired
}