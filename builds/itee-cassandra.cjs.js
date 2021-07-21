console.log('Itee.Database.Cassandra v1.0.3 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CassandraDriver = require('cassandra-driver');
var iteeDatabase = require('itee-database');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var CassandraDriver__namespace = /*#__PURE__*/_interopNamespace(CassandraDriver);

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TCassandraDatabase extends iteeDatabase.TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: CassandraDriver__namespace
            }
        };

        super( _parameters );

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        const client = new this._driver.Client( { contactPoints: [ 'localhost' ] } );

        client.execute( 'select key from system.local', function ( err, result ) {
            if ( err ) {
                throw err
            }
            // eslint-disable-next-line no-console
            console.log( result.rows[ 0 ] );
        } );

    }

    init () {
        super.init();

    }

    on ( /*eventName, callback*/ ) {}

}

exports.TCassandraDatabase = TCassandraDatabase;
//# sourceMappingURL=itee-cassandra.cjs.js.map
