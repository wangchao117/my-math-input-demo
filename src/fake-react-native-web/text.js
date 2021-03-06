const React = require('react');
const {StyleSheet, css} = require('aphrodite');

class Text extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node),
            React.PropTypes.node,
        ]),
        // The `dynamicStyle` prop is provided for animating dynamic
        // properties, as creating Aphrodite StyleSheets in animation loops is
        // expensive. `dynamicStyle` should be a raw style object, rather than
        // a StyleSheet.
        dynamicStyle: React.PropTypes.any,
        numberOfLines: React.PropTypes.number,
        style: React.PropTypes.any,
    };

    render() {
        const {numberOfLines, style} = this.props;

        const className = css(
            styles.initial,
            ...(Array.isArray(style) ? style : [style]),
            numberOfLines === 1 && styles.singleLineStyle
        );

        // return <span className={className} style={this.props.dynamicStyle}>
        // return <span className={className} style={this.props.dynamicStyle} onClick={()=>this.props.onPress()}>
        return <span className={className} style={this.props.dynamicStyle} onClick={()=>this.props.onPress?this.props.onPress():null}>
            {this.props.children}
        </span>;
    }
}

// https://github.com/necolas/react-native-web/blob/master/src/components/Text/index.js
const styles = StyleSheet.create({
    initial: {
        color: 'inherit',
        display: 'inline',
        font: 'inherit',
        margin: 0,
        padding: 0,
        textDecorationLine: 'none',
        wordWrap: 'break-word',
    },
    singleLineStyle: {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

module.exports = Text;
