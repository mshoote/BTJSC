#!/usr/bin/perl
#
use Modern::Perl;
use strict;
use warnings;
 
binmode STDOUT, ":utf8";
use utf8;
 
use JSON;
 
my $json;
{
  local $/; #Enable 'slurp' mode

  # Need to get actual files
  open my $fh, "<", "Console Files/console (2).json";
  $json = <$fh>;
  close $fh;
}
my $data = decode_json($json);
# Output to screen one of the values read
my $speed = $data->{'loadEventEnd'} - $data->{'navigationStart'};
print "Speed: " . ($speed / 1000) . "s\n"
